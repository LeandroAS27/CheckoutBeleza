import Header from "../components/Header";
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import InputMask from 'react-input-mask'

//material ui
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Footer from "../components/Footer";

const Payment = () => {
    const { register, formState: { errors }, control, handleSubmit} = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {

        console.log('Dados validados:', data)
        navigate(`/confirmPayment`, {state: data})
    } 

    return(
        <div className="bg-gray-100 w-full h-screen">
            <header className="flex w-full md:w-2/4 justify-center items-center mx-auto">
                <Header/>
            </header>

            <main className="bg-white border shadow-md rounded-lg mx-auto mt-8 p-6 max-w-md w-full">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="font-bold ml-2 text-xl">Cartao de Crédito</h1>
                    <Box
                        sx={{ '& > :not(style)': { m: 1, width: '500', maxWidth: '100%' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <Controller
                            name="cardNumber"
                            control={control}
                            defaultValue=''
                            rules={{
                                required: "Insira um número de cartão válido",
                                pattern: {
                                    value: /^[0-9\s]{19}$/,
                                    message: "Número de cartão inválido",
                                }
                            }}
                            render={({ field }) => (
                               <InputMask
                                mask="9999 9999 9999 9999"
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                >
                                    {() => (
                                        <TextField 
                                        {...field}
                                        label="Número do cartão" 
                                        variant="outlined" 
                                        placeholder="0000 0000 0000 0000"
                                        error={!!errors.cardNumber}
                                        helperText={errors.cardNumber ? errors.cardNumber.message : ''}
                                        fullWidth
                                        />
                                    )}
                                </InputMask>
                            )}
                        />
                        <TextField 
                        id="cardHolder" 
                        label="Nome do Titular" 
                        variant="outlined" 
                        placeholder="Nome impresso no cartão"
                        error={!!errors.cardHolder}
                        helperText={errors.cardHolder ? errors.cardHolder.message : ''}
                        fullWidth
                        {...register('cardHolder', {
                            required: "Insira um nome válido",
                        })}
                        />
                        <div className="flex space-x-2">
                            <Controller
                                name="expiryDate"
                                control={control}
                                defaultValue=''
                                rules={{
                                    required: "Insira uma data válida",
                                    pattern: {
                                        value: /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
                                        message: "Data de validade inválida",
                                    }
                                }}
                                render={({ field }) => (
                                <InputMask
                                    mask="99/99"
                                    value={field.value}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    >
                                        {() => (
                                            <TextField 
                                            {...field}
                                            label="Validade" 
                                            variant="outlined" 
                                            placeholder='MM/AA'
                                            error={!!errors.expiryDate}
                                            helperText={errors.expiryDate ? errors.expiryDate.message : ''}
                                            
                                            />
                                        )}
                                    </InputMask>
                                )}
                            />

                            <TextField 
                            id="cvv" 
                            label="CVV" 
                            variant="outlined" 
                            placeholder="123"
                            error={!!errors.cvv}
                            helperText={errors.cvv ? errors.cvv.message : ''}
                            {...register('cvv', {
                                required: "Insira um cvv válido",
                                pattern: {
                                    value: /^[0-9]{3,4}$/,
                                    message: "CVV inválido",
                                }
                            })}
                            />
                        </div>

                    </Box>
                </form>
            </main>

            <footer className="flex flex-col justify-center items-center w-full">
                <Footer/>
                <button type="submit"
                onClick={handleSubmit(onSubmit)}
                className="w-full md:w-2/4 py-2 px-2 bg-purple-500 hover:bg-purple-700 text-white font-bold rounded-md"
                >Finalizar o pedido</button>
            </footer>
        </div>
    )
}

export default Payment;