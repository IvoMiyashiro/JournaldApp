import React from 'react';
import { 
    Button,
    Link,
} from './styles';

export const ButtonPrimary = ({ 
    fontSize='1rem',
    fontStyle='regular',
    height='30px',
    children='',
    to="",
    width='100px',
    func=null,
    disabled=false,
}) => {
    return to
            ?
                <Link
                    fontSize={ fontSize }
                    fontStyle={ fontStyle }
                    height={ height }
                    to={ to }
                    width={ width }
                >
                    { children }
                </Link>
            :
                <Button
                    disabled={ disabled }
                    fontSize={ fontSize }
                    fontStyle={ fontStyle }
                    height={ height }
                    width={ width }
                    onClick={ func }
                >
                    { children }
                </Button>
}
