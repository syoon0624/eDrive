# E드라이브 본문 검색 UI 개발

## 연구배경
조직의 보안 측면에서 문서중앙화 관련 관심이 높아지고 있다. 그런데 대량의 파일들을 중앙화하면 파일명, 폴더명과 같은 단순 메타정보 기반의 검색은 사용자가 원하는 정보를 빠르게 검색하는 것이 불가능하다. 또한, 파일 본문 내용의 검색이 불가하므로 문서 내 본문 내용을 추출할 수 있는 기술을 기반으로 추출 완료된 문서 내용을 효율적으로 검색할 수 있는 검색 엔진 인터페이스를 개발한다.

## 오픈 소스 및 개발 프레임워크
- Elasric Search : ELK 스택 및 Nori 형태소 분석기
- React.js
- Redux.js
- Mantine
- AWS : S3, EC2 instance

## 프로젝트 아키텍처
<img width="677" alt="스크린샷 2021-06-24 오후 6 51 48" src="https://user-images.githubusercontent.com/77139957/123242676-3d0d9400-d51d-11eb-9edb-472f9057f821.png">
<br>
사용자는 문서 저장소(S3)에 문서를 저장하는 것과 EC2로 배포된 웹사이트에서 문서를 검색하는 기능을 이용할 수 있다.
S3에 저장된 문서를 문서 파서로 파싱되어 나온 결과(현재 mock data 사용)를 elastic cloud에 스키마 구조에 맞게 저장한다.
저장되어 나온 결과를 바탕으로 react와 redux, mantine을 통해 제작된 검색 인터페이스를 통해 사용자는 EC2에서 배포된 웹사이트에서 검색을 할 경우 앞서 말한 작성된 프론트에서 request를 처리하여 elastic cloud에 원하는 결과값에 대한 request를 요청하고 검색 결과를 받아 데이터를 가공하여 사용자에게 제공한다.

## 연구 결과
### 주요 기능
- 메인 Page
<img width="677" alt="스크린샷 2021-06-24 오후 6 52 14" src="https://user-images.githubusercontent.com/77139957/123242745-4c8cdd00-d51d-11eb-8403-e4680e842ce3.png">
- 로그인 Page
<img width="678" alt="스크린샷 2021-06-24 오후 6 52 32" src="https://user-images.githubusercontent.com/77139957/123242787-57e00880-d51d-11eb-867e-fe74c228ba87.png">
- 검색결과 Page
<img width="679" alt="스크린샷 2021-06-24 오후 6 52 51" src="https://user-images.githubusercontent.com/77139957/123242838-629a9d80-d51d-11eb-9a6e-29f8aa3d3139.png">
<br>
<img width="680" alt="스크린샷 2021-06-24 오후 6 53 06" src="https://user-images.githubusercontent.com/77139957/123242874-6af2d880-d51d-11eb-8022-5dee612fd2eb.png">

## 결론
S3 스토리지에 저장된 문서 파일의 내용과 작성자 등의 조건으로 웹사이트에서 사용자가 검색하여 결과를 얻고 웹사이트 상에서 바로 해당 파일을 다운로드 하는 것이 가능해졌다. 또한 문서의 메타 데이터 정보를 미리 확인하고, 문서 내에서 보유하고 있는 이미지들 또한 확인이 가능하다.

## Usage
```
git clone http://khuhub.khu.ac.kr/2021-1-capstone-design1/GCL_Project1.git
```
<br>
- 혹은 해당 레포지토리 다운로드
- ElasticSearch or ElasticSearch on Cloud

### 2. 로컬환경에서 실행
node.js 가 설치되었다는 가정하에 실행됩니다.<br>
- clone된 폴더로 접속 후 해당 CLI 입력<br>
```
npm install
```
<br>
```
npm start
```
- 를 입력시 로컬서버의 3000번 port로 기동

## OpenSource API & 레퍼런스
[ElasticSearch](https://www.elastic.co/kr/) <br>
[React.js](https://ko.reactjs.org/)  <br>
[Mantine](https://mantine.dev/) <br>
[AWS](https://aws.amazon.com/ko/sdk-for-node-js/) <br>

