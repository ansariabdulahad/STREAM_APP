import { one, two } from './Patterns.module.css';

export const PatternOne = ({ children }) => {
    const design = (
        <div className={one}>
            {children}
        </div>
    );
    return design;
}

export const PatternTwo = ({ children }) => {
    const design = (
        <div className={two}>
            {children}
        </div>
    );
    return design;
}
