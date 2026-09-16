import FooterForm from './FooterForm';

export const FooterUpdates = () => {
  return (
    <div className="lg:col-span-3">
      <h2 className="font-semibold text-white">Get the latest updates</h2>

      <p className="mt-3 mb-5 text-sm leading-relaxed">
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
