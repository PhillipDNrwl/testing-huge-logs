import { FeatureA } from '@grumpy-gorilla/libs/feature-a';
import NxWelcome from '../nx-welcome';
import { FeatureB } from '@grumpy-gorilla/libs/feature-b';
import { FeatureC } from '@grumpy-gorilla/libs/feature-c';

export default function Index() {
  return (
    <div>
      <NxWelcome title={'grumpy-gorilla'} />
      <FeatureA />
      <FeatureB />
      <FeatureC />
    </div>
  );
}
