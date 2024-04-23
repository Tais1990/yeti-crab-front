import MainLayout from '@/layouts/MainLayout/MainLayout';
import Login from '@/components/Login/Login';

export default function LoginPage() {
    return (
        <MainLayout title='Авторизация'>
            <h1>Страница логина</h1>
            <Login/>
        </MainLayout>
    )
}
