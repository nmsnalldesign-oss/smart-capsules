import pypdfium2 as pdfium
import os

pdf_path = r"d:\Заказы кодинг\FIRST WEB\smart-capsules\public\images\Патент_2852170_Способ_получения_суспензии_многоядерных_микрокапсул.pdf"
output_path = r"d:\Заказы кодинг\FIRST WEB\smart-capsules\public\images\page_1.png"

try:
    pdf = pdfium.PdfDocument(pdf_path)
    page = pdf[0] # Берем первую страницу
    bitmap = page.render(scale=3.0) # Хорошее разрешение
    img = bitmap.to_pil()
    img.save(output_path, "PNG")
    print(f"✅ Успешно сохранено: {output_path}")
except Exception as e:
    print(f"❌ Ошибка: {e}")
