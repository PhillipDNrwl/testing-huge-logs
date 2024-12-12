import styles from './feature-b.module.css';

/* eslint-disable-next-line */
export interface FeatureBProps {}

export function FeatureB(props: FeatureBProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureB!</h1>
    </div>
  );
}

export default FeatureB;
