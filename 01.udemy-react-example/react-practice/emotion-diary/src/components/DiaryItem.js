const DiaryItem = ({ id, emotion, content, date }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  return (
    <div className='DiaryItem'>
      <div className={['emotion_img_wrapper', `emotion_img_wrapper_${emotion}`].join(' ')}>
        <img src={env.PUBLIC_URL + `assets/emotion${emotion}.png`} alt='감정상태' />
      </div>
      <div className='info_wrapper'>
        <div className='diary_date'>{strDate}</div>
        <div className='diary_content_preview'>{content.slice(0, 25)}</div>
      </div>
      <div></div>
    </div>
  );
};

export default DiaryItem;
