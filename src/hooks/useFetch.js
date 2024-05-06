import { useState } from "react"
import axios from "axios"

const useFetch = (url) => {

    const [response, setResponse] = useState()
    const [hasError, setHasError] = useState(false)

    const getApi = () => {

        axios.get(url)
            .then(promiseResponse => {
                setResponse(promiseResponse.data)
                setHasError(false)
            })
            .catch(e => { setHasError(true) }
            )
    }
    return [response, getApi, hasError]
}

export default useFetch