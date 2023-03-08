const DiaryItem = ({ id, emotion, content, date }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';

  return (
    <div className='DiaryItem'>
      <div className={['emotion_img_wrapper', `emotion_img_wrapper_${emotion}`].join(' ')}>
        <img src={env.PUBLIC_URL + `assets/emotion${emotion}.png`} alt='감정상태' />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DiaryItem;
