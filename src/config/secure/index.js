const getSecureConfig = () => {
  const enviro = process.env.REACT_APP_ENV || 'local'
  const { config } = require(`./decrypted/${enviro}`)
  return config
}

export { getSecureConfig }
