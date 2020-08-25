const handleAsync = async (asyncFn) => {
  let result
  try {
    const { data } = await asyncFn()
    result = data
    console.log(result)
  } catch (e) {
    const { data } = e.response
    result = data
  }
  return result
}

export default handleAsync
