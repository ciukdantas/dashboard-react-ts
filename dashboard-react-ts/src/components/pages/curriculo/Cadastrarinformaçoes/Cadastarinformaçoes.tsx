import React from "react";
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import styles from './Cadastrarinformaçoes.module.css';
import { createInformacoes } from "../../../../services/informacoesService";

interface FormValues {
    foto: string;
    nome: string;
    cargo: string;
    resumo: string;
}

const Cadastrarinformacoes: React.FC = () => {

    const initialValues: FormValues = {
        foto: '',
        nome: '',
        cargo: '',
        resumo: '',
    };

    const validationSchema = Yup.object().shape({
        foto: Yup.string().required('Foto obrigatória'),
        nome: Yup.string().required('Nome obrigatório'),
        cargo: Yup.string().required('Cargo obrigatório'),
        resumo: Yup.string().required('Resumo obrigatório'),
    });

    const onSubmit = async (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        console.log(values);
        await createInformacoes(values);
        resetForm();
        alert('Formulário enviado com sucesso');
    };

    return (
        <div className={styles.formwrapper}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form className={styles.form}>
                        <h2 className={styles.title}>Cadastrar informações</h2>

                        <fieldset className={styles.formGroup}>
                            <label htmlFor="foto" className={styles.label}>Foto:</label>
                            <Field
                                type="text"
                                id="foto"
                                name="foto"
                                className={styles.input}
                            />
                            <ErrorMessage name="foto" component="div" className={styles.errorMsg} />
                        </fieldset>

                        <fieldset className={styles.formGroup}>
                            <label htmlFor="nome" className={styles.label}>Nome:</label>
                            <Field
                                type="text"
                                id="nome"
                                name="nome"
                                className={styles.input}
                            />
                            <ErrorMessage name="nome" component="div" className={styles.errorMsg} />
                        </fieldset>

                        <fieldset className={styles.formGroup}>
                            <label htmlFor="cargo" className={styles.label}>Cargo:</label>
                            <Field
                                type="text"
                                id="cargo"
                                name="cargo"
                                className={styles.input}
                            />
                            <ErrorMessage name="cargo" component="div" className={styles.errorMsg} />
                        </fieldset>

                        <fieldset className={styles.formGroup}>
                            <label htmlFor="resumo" className={styles.label}>Resumo:</label>
                            <Field
                                as="textarea"
                                id="resumo"
                                name="resumo"
                                className={styles.textarea}
                            />
                            <ErrorMessage name="resumo" component="div" className={styles.errorMsg} />
                        </fieldset>

                        <button type="submit" className={styles.button}>Salvar</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Cadastrarinformacoes;
