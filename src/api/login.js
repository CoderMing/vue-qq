import axios from 'axios'
import devConf from '../dev-config'

async function loginFuc (user_id, user_passwd) {
  return await axios({
    url: `${devConf.API_URL}/login`,
    method: 'POST',
    data: {
      user_id,
      user_passwd
    }
  })
}

export default loginFuc