import React from 'react'
import { Button, Input } from 'antd'
import axios from 'axios'
import styled from 'styled-components'

export const Login = setStatus => {
  const [login, setLogin] = React.useState({
    email: '',
    password: '',
  })

  const urlGenerator = React.useMemo(
    () =>
      `https://music-api-evalllll.vercel.app/login?email=${login.email}&password=${login.password}`,
    [login],
  )

  const onLogin = url => {
    axios.get(url).then(res => console.log(res.data))
  }

  const getLoginStatus = () => {
    axios
      .get('https://music-api-evalllll.vercel.app/login/status')
      .then(res => console.log(res.data))
  }

  return (
    <>
      <div>
        邮箱：
        <StyledInput
          value={login.email}
          onChange={e => setLogin({ ...login, email: e.target.value })}
        />
      </div>

      <div>
        密码：
        <StyledInput
          type="password"
          value={login.password}
          onChange={e => setLogin({ ...login, password: e.target.value })}
        />
      </div>

      <StyledButton onClick={() => onLogin(urlGenerator)}>登录</StyledButton>
      <StyledButton onClick={() => getLoginStatus()}>查看登录状态</StyledButton>
    </>
  )
}

const StyledInput = styled(Input)`
  width: 400px;
  margin: 10px 0;
`

const StyledButton = styled(Button)`
  margin: 0 10px;
`
