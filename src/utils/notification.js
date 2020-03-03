import cogoToast from 'cogo-toast';

export default (message, status = 'success') =>
  cogoToast[status](message, {
    position: 'top-right',
    bar: { size: '6px' },
    hideAfter: 5,
  });
