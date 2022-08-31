# hotel-booking-mern

- Follow Git Process: https://www.youtube.com/watch?v=vQgcl8VouLU&list=PLnzltho4_WjjgssyaqOxXqkrJLSn8SDUP

## Add git để bắt đầu làm việc:

```bash
git remote add origin https://github.com/nhannn87dn/hotel-booking-mern.git
```

## Làm tính năng được phân công theo quy trình

- Ví tính năng Homepage: feature/3-hompage (3 là con số `#3` trên issues nhiệm vi của bạn trên Github)

```bash
## Bước 1:  go to branch dev
git checkout dev
## Tạo rẻ nhánh feature/3-hompage từ nhánh dev
git checkout -b feature/3-hompage dev
## Bước 2: Thay đổi, thêm,chỉnh sửa code cho tính năng . Sau khi xong ta commit lên.
## Bước 3: Addthay đổi và commit
git add filename-cua-ban-1.js
git add filename-cua-ban-2.js 
git add filename-cua-ban-3.js 
#commit
git commit - m '#3 Make Homepage' ## Lưu ý #3 là tag issues nhiệm vụ lead giao cho bạn trên github.
#push file lên nhánh feature/3-hompage
git push --set-upstream origin feature/3-hompage
## Bước 4: Lead xem Pull and requests trên Github. 
## Chọn Base là dev. để đưa thay đổi này vào merge dev
## comment pull: #3 ..balala gì đó khi tạo Create Pull requests
## Merge feature/3-hompage vào dev brand

## Bước 5: sau khi hoan thanh feature thi checkout  dev
git checkout dev
git pull ## Day code về dev branch
## Bước 6: Xóa nhiệm vụ thực hiện tại feature/3-hompage
git branch -d feature/3-hompage #xoa o local
git push origin -d feature/3-hompage #xoa o remote
## Bước 6: Đẩy code lên để Release phiên bản mới
git checkout -b release1.1.0
## Bước 7: Review code, add commit thay đổi nếu có. 
# Ko thay đổi bỏ qua bước 7.
git add filename-cua-ban.js
git commit - m 'Publish to release1.1.0'
# Đẩy code lên release1.1.0
git push 
git push --set-upstream origin release1.1.0
## Bước 8: Lead xem Pull and requests trên Github. 
## Chọn Base là main. để đưa thay đổi này vào merge main
## comment pull: #3 ..balala gì đó khi tạo Create Pull requests
## Merge release1.1.0 vào main brand

## Bước 9: Checkout qua main.
git checkout main
git pull #đẩy code lên main.

## Bước 10: Xóa nhánh release1.1.0
git branch -d release1.1.0 #xoa o local
git push origin -d release1.1.0 #xoa o remote

## Bước 11: tạ Tag đánh dấu phiên bản mới
git tag 'v1.1.0'
git push --tags
git push # đây code lên tag

## Bước 12:
# Quay lại bước 1 để bắt đầu quy trình phát triển một tính năng mới cho app
#END
```

## Xử Lý Production lỗi code
- Tạo nhánh hotfixes
- Sửa lỗi xong đẩy xuống dev nếu quá trính fix lâu, hoặc cho lên main luôn nếu quá trình diễn ra nhanh.

```bash
git checkout -b hotfixes
#fix lỗi, và add file đã thay đổi để commit
git add filename-cua-ban.js
git commit -m '#3 fix lỗi abc'
# Đẩy code lên hotfixes
git push 
git push --set-upstream origin hotfixes

## Next: Lead xem Pull and requests trên Github. 
# Tùy phải fix nhiều lỗi hay hay ít mà merge tới dev, hay main.
## Chọn Base là main. để đưa thay đổi này vào merge main
## comment pull: #3 ..balala gì đó khi tạo Create Pull requests
## Merge hotfixes vào main brand

## Next Checkout qua main.
git checkout main
git pull #đẩy code lên main.

## Next: Xóa nhánh hotfixes
git branch -d hotfixes #xoa o local
git push origin -d hotfixes #xoa o remote


```
