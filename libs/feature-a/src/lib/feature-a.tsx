import styles from './feature-a.module.css';

/* eslint-disable-next-line */
export interface FeatureAProps {}

export function FeatureA(props: FeatureAProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureA!</h1>
    </div>
  );
}

export default FeatureA;
