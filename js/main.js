function getRandomPositiveInteger(min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random(1 * (upper - lower + 1) + lower);
  return Math.floor(result);
}

function checkStringLength(string, length) {
  return string.lehgth <= length;
}


getRandomPositiveInteger(1, 10);
checkStringLength('', 100);

//id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
const existId = [];
function photoId(min, max) {
  let flag = true;
  let randomNumber;
  do {
    randomNumber = getRandomPositiveInteger(min, max);
    if (!existId.includes(randomNumber)) {//Если значение Id уникально записываем в массив и выходим из цикла
      existId.push(randomNumber);
      flag = false;
    }
  } while (flag);
  return randomNumber;
}

//url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

const MESSAGE_EXAMPLE = 'Комментарий';
const ARRAY_COMMENTS = MESSAGE_EXAMPLE.split('\n');

const SURNAMES = [
  'Иван',
  'Петр',
  'Сидр',
  'Оля',
  'Юля',
  'Таня',
  'Олег',
  'Кеша',
];

const generateArrayComment = function (count) {
  function crateComment() {
    return {
      id: photoId(26, 1000),
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: generateMessageString(getRandomPositiveInteger(1, 2)),
      name: SURNAMES[getRandomPositiveInteger(0, SURNAMES.length)],
    };
  }
  return Array.from({ length: count }, crateComment);
};

function generateMessageString(count) {
  let messageString = '';
  const uniqComment = [];
  for (let i = 1; i <= count; i++) {
    const commentId = getRandomPositiveInteger(0, ARRAY_COMMENTS.length - 1);
    if (!uniqComment.includes(commentId)) {
      messageString += ARRAY_COMMENTS[commentId];
      messageString += (i < count) ? '\n' : '';
    } else { i--; }
  }
  return messageString;
}

const generatePhoto = function () {
  const uniqId = photoId(1, 25);
  return {
    id: uniqId,
    url: `photos/${uniqId}.jpg`,
    description: `Это описание фотографии под номером ${uniqId}`,
    likes: getRandomPositiveInteger(15, 200),
    comments: generateArrayComment(getRandomPositiveInteger(1, 5))
  };
};

//Набиваем объекты фотографий в массив
function generatearrayPhoto(count) {
  const arrayPhoto = [];
  for (let i = 0; i < count; i++) {
    arrayPhoto.push(generatePhoto());
  }
  return arrayPhoto;
}

generatearrayPhoto(25);
