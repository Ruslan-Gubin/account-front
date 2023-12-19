import { useLocation, useNavigate, useParams } from "react-router-dom";


export const useNavigationReact = () => {
  const navigation = useNavigate()
  const location = useLocation()
  const { id } = useParams()

  const goBack =() => navigation( - 1)

  const router = (url: string, params?: number) => {
    const patch = params ? `/${url}/${params}` : url
    navigation(patch)
  }

  return {
    router,
    pathName: location.pathname,
    goBack,
    params: id,
  }

}

