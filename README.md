# Jest Test Code
### Site 요구사항
- `Site`는 n개 이상 생성 할 수 있다.
- `Site`에는 `Board` 를 추가하고 추가된 `Board`를 조회할 수 있다.
- 하나의 `Site`에 동일한 이름의 `Board`를 추가할 수 없다.
- `Board`는 n개 이상 추가 할 수 있다.
### Board 요구사항
- `Board`는 `name` 데이터를 포함해야 하며 `null` 또는 빈 문자열(`''`)은 허용하지 않는다.
- `Site` 에 추가된 `Board`만 사용 가능한 것으로 간주하며 사용 불가능한 `Board`에는 `Article`을 추가할 수 없다.
- `Board`에 `Article`을 추가할 때 `Article`에 ID를 자동 생성해서 부여해야 한다.
- 규칙은 `${board.name}-${랜덤 값}` 를 따른다.
- `Board`에 `Article`을 추가할 때 `Article`에 작성 일자가 들어가야 한다.
- 저장되는 형식은 `[ISO 8601]`을 따른다.
- `Article` 은 n개 이상 추가 할 수 있다.
- 작성된 `Article` 목록을 조회 할 수 있어야 한다.
### Article 요구사항
- `Article`은 `subject`, `content`, `author` 3개의 데이터를 포함해야 하며 `null` 또는 빈 문자열(`''`)은 허용하지 않는다.
- `Board`에 추가된 `Article`만 사용 가능한 것으로 간주하며 사용 불가능한 `Article`에는 `Comment`를 추가할 수 없다.
- `Article`에 `Comment`를 추가할 때 `Comment`에 작성 일자가 들어가야 한다.
- 저장되는 형식은 `[ISO 8601]`을 따른다.
- `Comment`는 n개 이상 추가 할 수 있다.
- 작성된 `Comment` 목록을 조회 할 수 있어야 한다.
### Comment 요구사항
- `Comment`는 `content`, `author` 2개의 데이터를 포함해야 하며 `null` 또는 빈 문자열(`''`)은 허용하지 않는다.
