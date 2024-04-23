import { Button, Card, InputControlSize, TextInput } from "@gravity-ui/uikit";
import { useState } from "react";

interface LoginProps {
    
}

const Login : React.FC<LoginProps> = ({ }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('') 
    // TODO подумаь, что должнно отображаться на СТРАНИЦЕ если мы авторизованы
    return (
        <>
        <Card>
            {/* TODO добавить валидацию на поля на лету */}
            <TextInput
                placeholder="email"
                type="email"
                label="Email"
                size={'xl' as InputControlSize}
                value={email}
                onChange={(e) => {
                    setEmail( e.target.value)                    
                }}
            ></TextInput>
            <TextInput
                placeholder="пароль"
                type="password"
                label="Пароль"
                size={'xl' as InputControlSize}
                value={password}
                onChange={(e) => {
                    setPassword( e.target.value)                    
                }}
            ></TextInput>
            <Button onClick={() => {
                console.log('Отпарвляем данные на сервак', email, password);                
            }}>Авторизоваться</Button>
            {/* TODO обрабооткак ошибки авторизации как сообщения об ошибки - в алерт, если всё хорошо - сообщение. в сторе заисываем даннные об имени аторизованного пользователя */}
            
        </Card>
            
        </>
    );
};

export default Login;