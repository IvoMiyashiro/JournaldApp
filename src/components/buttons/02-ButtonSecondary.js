import React from 'react';
import { 
    ButtonOutline,
    LinkOutline,
} from './styles';

export const ButtonSecondary = ({ 
    fontSize = '1rem',
    fontStyle = 'regular',
    height = '30px',
    children,
    to = '',
    width = '100px',
}) => {
    return to
                ?
                    <LinkOutline
                        fontSize={ fontSize }
                        fontStyle={ fontStyle }
                        height={ height }
                        to={ to }
                        width={ width }
                    >
                        { children }
                    </LinkOutline>
                :
                    <ButtonOutline 
                        fontSize={ fontSize }
                        fontStyle={ fontStyle }
                        height={ height }
                        width={ width } 
                    >
                        { children }
                    </ButtonOutline>
}
