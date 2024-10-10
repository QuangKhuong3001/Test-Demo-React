import videoHomepage from '../../assets/video-homepage.mp4'

const HomePage = () => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source
                    src={videoHomepage}
                    type="video/mp4"
                />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>
                    Get up to 3.5x more data about them
                </div>
                <div className='title-2'>
                    When your forms break the norm, more people fill them out.
                    Think branded designs, video content, and relevant follow-up questions.
                </div>
                <div className='title-3'>
                    <button>Get's started. Its free</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage