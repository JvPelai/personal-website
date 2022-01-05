import Image from 'next/image'
import profileImage from '../../public/assets/profile.jpg'
import utilStyles from '../styles/utils.module.css'
const Profile = () => {
  return (
    <Image
      priority
      src={profileImage}
      className={utilStyles.borderCircle}
      alt="João Pelai"
      width={264}
      height={264}
    />
  )
}

export default Profile
