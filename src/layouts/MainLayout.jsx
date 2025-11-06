import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router'

export function MainLayout(){
    return (
        <div className='flex flex-col min-h-screen'>
            <Header/>
            <main className='h-auto'>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}