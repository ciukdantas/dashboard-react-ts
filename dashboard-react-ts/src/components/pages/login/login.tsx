import React from 'react';

// import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import styles from './login.module.css';

import Input from '../../../components/forms/Input';
import { useNavigate } from 'react-router-dom';
import { login as loginService } from '../../../services/authServices';
import { useAuth } from '../../../contexts/AuthContexts';


import  Form  from"../../../components/forms/Form";
import Button from '../../../components/common/Button';
import Title from '../../../components/common/Title';





interface LoginValues  {
    email: string;
    password: string;
};


const initialValues: LoginValues = {
    email: "",
    password: "",
};

const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email("Email inválido")
    .required("Este campo é obrigatório"),
    password: Yup.string()
    .min(6, "Sua senha deve conter pelo menos 6 digitos")
    .required("Este campo é obrigatório"),
});

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const onSubmit = async (values: LoginValues) => {
        try {
           const eser = await loginService({
            email:values.email, 
            password:values.password
        });
            login (eser);
            navigate("/");
            console.log(values);
        } catch (error) {
            console.log(error);
            alert("Erro ao realizar login");
        }
    };

    return (
        <div className={styles.loginwrapper}>

        <Form  initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            
        >
            {({ errors, touched }) => (
                <>
                
                <Title>MEU SITE PESSOAL</Title>

                <Input
                    label="Email"
                    name="email"
                    type="email"
                    errors={errors.email}
                    touched={touched.email}
                />
                <Input
                    label="Senha"
                    name="password"
                    type="password"
                    errors={errors.password}
                    touched={touched.password}
                />
                <Button type="submit">Entrar</Button>
                </>
            )}
        </Form>
    </div>
    );
};   
    

export default Login;