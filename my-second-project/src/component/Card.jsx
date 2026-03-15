
import './Card.css'

const Card = (props) => {
  return (
    <div className='user-details'>
      <p id='user-name'>{props.name}</p>
      <img id='user-image' src="https://media.licdn.com/dms/image/v2/D5603AQG6TfAVFdlLfw/profile-displayphoto-crop_800_800/B56ZwevsQGJIAI-/0/1770042346111?e=1775088000&v=beta&t=PGwEVUhQVvpEOraZLCv0SxU_YkcrYoLJr-TfZgfn680" alt="Priyanshu" />
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default Card
