import { footerUpdatesClassName } from './constant';
import FooterForm from './FooterForm';

export const FooterUpdates = () => {
  return (
    <div className={footerUpdatesClassName?.container}>
      <h2 className={footerUpdatesClassName?.title}>Get the latest updates</h2>

      <p className={footerUpdatesClassName?.description}>
        Be the first to know about new features and product updates.
      </p>

      <FooterForm
        onSubscribe={() => {
          alert('Subscribed!');
        }}
      />
    </div>
  );
};
