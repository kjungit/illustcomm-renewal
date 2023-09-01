# illustcomm-renewal
## ⭐️ 프로젝트 소개
![mainmain](https://github.com/kjungit/illustcomm-FE/assets/100064540/39f98b8e-c98f-490f-b174-8bbf8d64d9e4)
> 일러스트 작가들을 위한 SNS 커뮤니티

### ⏰ 개발 기간
- 2023.08.13  ~ 2023.08.24
- [배포사이트](https://illustcomm-renewal.vercel.app/)

### ⚙️ 개발환경
- 사용언어: `Next.js 13`, `Typecript`
- style: `tailwind`
- 라이브러리:`SWR` `Next-Auth` `Timeago` `react-masonry-css`
- 백엔드: `Sanity`
- CI/CD: `Vercel`
---

### 📦 프로젝트 폴더 구조

```
src
 ┣ app
 ┃ ┣ api
 ┃ ┣ auth
 ┃ ┣ edit
 ┃ ┣ new
 ┃ ┣ search
 ┃ ┣ user
 ┃ ┣ layout.tsx
 ┃ ┗ page.tsx
 ┣ components
 ┣ context
 ┣ hooks
 ┣ lib
 ┣ model
 ┣ service
 ┣ types
 ┣ utils
 ┗ middleware.ts
```


---
### 🖥 프로젝트 미리보기

|**메인 페이지**|**반응형 적용**|
| --- | --- |
|<p align="center"><img src="https://github.com/kjungit/illustcomm-renewal/assets/100064540/41aecdfd-894c-48de-b848-868f6de571c9" width="500"  style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="https://github.com/kjungit/illustcomm-renewal/assets/100064540/98eb6e71-7bbb-495c-9637-665e2406ca0a" width="500" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">팔로우한 작가들의 작품리스트들을 볼 수 있는 메인 화면</p>|<p align="center">반응형으로 각 화면에 대응하도록 구현</p>|

</br>

|**OAuth**|**Art 피드**|
| --- | --- |
|<p align="center"><img src="https://github.com/kjungit/illustcomm-renewal/assets/100064540/652c1217-faa1-49f7-bc51-9b132f95e0a0" width="500"  style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="https://github.com/kjungit/illustcomm-renewal/assets/100064540/9b492f5e-2c9e-4cdd-ad20-c44e4b4ecda4" width="500" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">NextAuth를 사용하여 google, naver, kakao 소셜 로그인 구현</p>|<p align="center">작성한 작품, 좋아요, 북마크 별 리스트 확인 가능</p>|

</br>

|**작가 검색**|**Follow**|
| --- | --- |
|<p align="center"><img src="https://github.com/kjungit/illustcomm-renewal/assets/100064540/da8a3158-afe7-4e45-a62c-af432cd22f7e" width="500"  style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="https://github.com/kjungit/illustcomm-renewal/assets/100064540/2251ccd5-1438-4595-953d-d814056eaff8" width="500" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">작가 검색 기능 구현, debounce를 적용하여 네트워크 요청을 제어하여 성능 개선</p>|<p align="center">팔로우 기능 구현, 전체피드에서는 팔로우한 작품들만 확인 가능</p>|

</br>

|**작품 등록**|**개별 작품**|
| --- | --- |
|<p align="center"><img src="https://github.com/kjungit/illustcomm-renewal/assets/100064540/c306b8ba-4484-4f65-b4a5-6bc09b1c000e" width="500"  style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="https://github.com/kjungit/illustcomm-renewal/assets/100064540/2251ccd5-1438-4595-953d-d814056eaff8" width="500" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">파일 선택 및 Drag&Drop을 사용하여 이미지 추가 가능하도록 구현</p>|<p align="center">개별 작품 페이지에서 댓글 기능 및 좋아요, 북마크 기능 구현</p>|


