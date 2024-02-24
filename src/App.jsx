import { useRoutes } from 'react-router'
import { router } from './router'
import Navigation from './components/Navigation/Navigation'
//46,751,285,802        46,753,095,680

function App() {
    const routes = useRoutes(router)
    document.documentElement.classList.add('dark')
    //https://raw.githubusercontent.com/amir-mohammadzadeh/DataBase/main/Users.json
    //https://raw.githubusercontent.com/amir-mohammadzadeh/DataBase/main/Users.json?token=GHSAT0AAAAAACKHUAJWRRDOK5JFHWSHNXM2ZOXS2ZQ
    //https://raw.githubusercontent.com/amir-mohammadzadeh/DataBase/main/CV_Data.json?token=GHSAT0AAAAAACKHUAJWLROUPTU5JUVLA57KZOXUNSQ
    //amir.cv/Data.json

    return (
        <>
            <div dir='rtl' className="w-full h-full py-8 px-6 flex gap-4 lg:flex-col-reverse lg:p-0 lg:pt-4">
                <Navigation />
                <main className="main">
                    {routes}
                </main>
            </div>
        </>
    )
}

export default App