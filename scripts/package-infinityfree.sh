#!/usr/bin/env bash
# ------------------------------------------------------------
# يبني حزمة ZIP جاهزة للرفع على InfinityFree (محتوى مجلد htdocs):
#   - index.html مباشرةً في جذر الأرشيف (بلا مجلد dist إضافي)
#   - ملفات .htaccess للصفحة الرئيسية وصفحة 404 (عربي + إنجليزي)
#   - لا تُضمَّن ملفات المصدر أو node_modules أو الوثائق الداخلية
#
# الاستخدام (من جذر المستودع):
#   SITE_URL=https://dr-sumaiaalhalabi.gt.tc SITE_BASE=/ npm run build
#   bash scripts/package-infinityfree.sh [dist-dir] [output-zip]
# ------------------------------------------------------------
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$(cd "${1:-$ROOT/dist}" && pwd)"
OUT_ARG="${2:-$ROOT/release/dr-sumaiaalhalabi-infinityfree.zip}"
TEMPLATES="$ROOT/scripts/infinityfree"

if [ ! -f "$DIST/index.html" ]; then
  echo "خطأ: لم يُعثر على index.html في $DIST — شغّل npm run build أولاً." >&2
  exit 1
fi

mkdir -p "$(dirname "$OUT_ARG")"
OUT="$(cd "$(dirname "$OUT_ARG")" && pwd)/$(basename "$OUT_ARG")"
rm -f "$OUT"

STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

# 1) محتويات dist فقط (بلا المجلد نفسه)
cp -a "$DIST/." "$STAGE/"

# 2) وثائق المشروع الداخلية ليست جزءاً من الموقع المنشور
rm -f "$STAGE/Dr.S_Website.md" "$STAGE/images/README.md"

# 3) إعدادات Apache
cp "$TEMPLATES/root.htaccess" "$STAGE/.htaccess"
mkdir -p "$STAGE/en"
cp "$TEMPLATES/en.htaccess" "$STAGE/en/.htaccess"

# 4) الضغط — المسار داخل الأرشيف يبدأ من الجذر مباشرةً
(cd "$STAGE" && zip -r -X -q "$OUT" .)

# 5) تحقق: index.html في الجذر + لا ملفات ممنوعة
if ! unzip -Z1 "$OUT" | grep -qx 'index.html'; then
  echo "خطأ: index.html ليس في جذر الأرشيف" >&2; exit 1
fi
if unzip -Z1 "$OUT" | grep -Eq '(^|/)(node_modules|src|\.git|package(-lock)?\.json)(/|$)|\.map$|Dr\.S_Website\.md$|images/README\.md$'; then
  echo "خطأ: الأرشيف يحتوي ملفات مصدر محظورة" >&2; exit 1
fi

echo "تم إنشاء: $OUT"
echo "عدد الملفات: $(unzip -Z1 "$OUT" | grep -vc '/$')"
echo "الحجم: $(du -h "$OUT" | cut -f1)"
