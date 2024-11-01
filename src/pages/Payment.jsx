import Header from "../components/Header";
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

//material ui
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Footer from "../components/Footer";

const Payment = () => {
    const { register, formState: { errors }} = useForm();
    const onSubmit = data => console.log(data)
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate(`/confirmPayment`)
    } 

    return(
        <div className="bg-gray-100 w-full h-screen">
            <header>
                <Header/>
            </header>

            <main className="bg-white border shadow-md rounded-lg mx-auto mt-8 p-6 max-w-md w-full">
                <form onSubmit={handleSubmit(onSubmit   )}>
                    <h1>Cartao de Credito</h1>
                    <Box
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField 
                        id="outlined-basic" 
                        label="Numero" 
                        variant="outlined" 
                        placeholder="0000 0000 0000 0000"
                        error={!!errors.cardNumber}
                        helperText={errors.cardNumber ? errors.cardNumber.message : ''}
                        {...register('cardNumber', {
                            required: "Número do cartao é obrigatório",
                            pattern: {
                                value: /^[0-9]{16}$/,
                                message: "Número de cartão inválido",
                            }
                        })}
                        />

                        <TextField 
                        id="cardHolder" 
                        label="Nome do Titular" 
                        variant="outlined" 
                        placeholder="Nome impresso no cartão"
                        error={!!errors.cardHolder}
                        helperText={errors.cardHolder ? errors.cardHolder.message : ''}
                        {...register('cardHolder', {
                            required: "Nome do titular é obrigatório",
                        })}
                        />

                        <TextField 
                        id="expiryDate" 
                        label="Validade" 
                        variant="outlined" 
                        placeholder="MM/AA"
                        error={!!errors.expiryDate}
                        helperText={errors.expiryDate ? errors.expiryDate.message : ''}
                        {...register('expiryDate', {
                            required: "Data de validade é obrigatória",
                            pattern: {
                                value: /^(0[1-9]|1[0-2])\/d{2}$/,
                                message: "Data de validade inválida",
                            }
                        })}
                        />

                        <TextField 
                        id="cvv" 
                        label="CVV" 
                        variant="outlined" 
                        placeholder="123"
                        error={!!errors.cvv}
                        helperText={errors.cvv ? errors.cvv.message : ''}
                        {...register('cvv', {
                            required: "CVV é obrigatório",
                            pattern: {
                                value: /^[0-9]{3,4}$/,
                                message: "CVV inválido",
                            }
                        })}
                        />

                    </Box>
                </form>
            </main>

            <footer>
                <Footer/>
                <button type="submit"
                className="w-3/4 py-2 px-2 bg-purple-500 text-white font-bold rounded-md"
                >Finalizar o pedido</button>
            </footer>
        </div>
    )
}

export default Payment;