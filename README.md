# hotel-booking-mern

- Follow Git Process: https://www.youtube.com/watch?v=vQgcl8VouLU&list=PLnzltho4_WjjgssyaqOxXqkrJLSn8SDUP

- Add git:

```bash
## Add remote
git remote add origin https://github.com/nhannn87dn/hotel-booking-mern.git
## create dev branch
git branch dev
## START - create feature branch ex feature1.1 from dev branch
git checkout -b feature/1-create-structure-project dev
git push
## Push code from origin to feature/1-create-structure-project
git push --set-upstream origin feature/1-create-structure-project
## sau khi hoan thanh feature thi checkout  dev
git checkout dev
git pull
#Xong roi day len release1.0.0 branch
git checkout -b release1.0.0 dev
#tao tag danh dau phien ban release
git tag 'v1.0.0'
git push --tags
#Day code tu Dev qua cho release1.0.0
git merge dev
git push --set-upstream origin release1.0.0
# day code len main va danh dau phien ban cho production
git checkout main
git pull
git tag 'v1.0.0'
git push --tags
# xoa cac branch da thuc hien: release1.0.0, feature/1-create-structure-project
git branch -d release1.0.0 #xoa o local
git push origin -d release1.0.0 #xoa o remote

git branch -d feature/1-create-structure-project #xoa o local
git push origin -d feature/1-create-structure-project #xoa o remote
#END

```bash
