import styles from './layout.module.css';

const LoginLayout = ( {children}: {children: React.ReactNode}) => {
  return (
    <div className={styles.login__layout}>{children}</div>
  )
}

export default LoginLayout;