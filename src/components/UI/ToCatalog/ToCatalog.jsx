import style from './ToCatalog.module.scss'

const ToCatalog = ({linkText}) => {
    return (
        <div className={style.right}>
        <a href="#">{linkText}</a>
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.2309 8.67584L2.00808 15.4644C1.54862 15.8965 0.80369 15.8965 0.344454 15.4644C-0.114818 15.0327 -0.114818 14.3326 0.344454 13.901L6.73553 7.89411L0.34464 1.88747C-0.114632 1.45562 -0.114632 0.75556 0.34464 0.323886C0.803913 -0.107962 1.54881 -0.107962 2.00827 0.323886L9.23108 7.11256C9.46072 7.32851 9.57541 7.61122 9.57541 7.89408C9.57541 8.17707 9.4605 8.46 9.2309 8.67584Z" fill="#E8AA31" />
        </svg>

      </div>
    );
};

export default ToCatalog;