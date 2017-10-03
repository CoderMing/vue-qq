import axios from 'axios'
import devConf from '../dev-config'

async function loginFuc (obj) {
  return await axios({
    url: `${devConf.API_URL}/login`,
    method: 'POST',
    data: {
      user_id: obj.user_id,
      user_passwd: obj.user_passwd
    }
  })
    .then(e => e.data)
}

export default loginFuc