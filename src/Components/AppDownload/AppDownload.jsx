import { assets } from '../../assets/assets'
import './AppDownload.css'
const AppDownload = () => {
return (
    <div className='app-download' id='app-download'>
        <p>For better experience Download <br />tomato app </p>
        <div className="app-download-platform">
            <img src={assets.app_store} alt="" />
            <img src={assets.play_store} alt="" />
            </div>
    </div>
)}

export default AppDownload
