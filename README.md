# TaiRoblox GitHub Pages

Bộ code tĩnh dành cho GitHub Pages, được chuyển từ HTML WordPress/Flatsome của TaiRoblox.

## Cấu trúc

```txt
tairoblox-github-pages-y-chang-fixed/
├── index.html
├── README.md
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── assets/
    ├── github-fix.css
    └── github-fix.js
```

## Cách deploy lên GitHub Pages

1. Tạo repository mới, ví dụ: `tairoblox-hub`
2. Upload toàn bộ file trong thư mục này lên repo
3. Đảm bảo `index.html` nằm ngoài cùng repo
4. Vào `Settings` → `Pages`
5. Chọn `Deploy from a branch`
6. Branch: `main`
7. Folder: `/root`
8. Bấm `Save`

## Việc cần sửa sau khi có link thật

Mở các file sau:

- `index.html`
- `robots.txt`
- `sitemap.xml`

Tìm:

```txt
USERNAME
```

Đổi thành username GitHub thật của bạn.

Ví dụ:

```txt
https://tairobloxcom.github.io/tairoblox-hub/
```

## Ghi chú

Bản này dùng ảnh và một số CSS public từ `tairoblox.com` để giữ giao diện giống website gốc hơn. Nếu website gốc đổi đường dẫn ảnh/CSS hoặc chặn hotlink, bạn nên tải ảnh về thư mục `assets/images/` và cập nhật lại đường dẫn.