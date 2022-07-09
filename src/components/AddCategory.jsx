import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event) => {
        setinputValue( event.target.value );
    }

    const onSubmit = (event) => {
        // para no recargar el componente
        event.preventDefault();
        
        // validamos que por lo menos tenga mas de 1 digito
        if (inputValue.trim().length <= 1) {
            return
        }

        // Enviamos al padre lo que se digito en el input
        onNewCategory(inputValue.trim());

        // borramos lo que tenga el input
        setinputValue('');
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text"
                placeholder="Buscar Gif" 
                value={ inputValue }
                onChange={ (event) => onInputChange(event) }
            />
        </form>
    )
}

