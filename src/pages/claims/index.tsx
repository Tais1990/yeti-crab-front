import MainLayout from '@/layouts/MainLayout/MainLayout';
import Claims from '@/components/Claims/Claims';

export default function Login() {
    return (
        <MainLayout title='Заявки'>
            <h1>Страница c таблицей заявок</h1>
            <Claims></Claims>
        </MainLayout>
    )
}
