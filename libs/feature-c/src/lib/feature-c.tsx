import styles from './feature-c.module.css';

/* eslint-disable-next-line */
export interface FeatureCProps {}

export function FeatureC(props: FeatureCProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureC!</h1>
    </div>
  );
}

export default FeatureC;
