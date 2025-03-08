if ('caches' in window) {
  caches.keys().then(names => {
    let cacheDeleted = true;

    const deletePromises = names.map(name => {
      if (name.includes('Jurastudijobs.com')) {
        return caches.delete(name).then(deleted => {
          if (deleted) {
            console.log(`Cache ${name} related to Jurastudijobs.com deleted`);
          } else {
            cacheDeleted = false;
            console.log(`Failed to delete cache ${name}`);
          }
        }).catch(err => {
          cacheDeleted = false;
          console.error(`Error deleting cache ${name}:`, err);
        });
      }
    });

    return Promise.all(deletePromises).then(() => {
      if (cacheDeleted) {
        console.log('All old caches related to Jurastudijobs.com are deleted');
      } else {
        console.log('Some caches related to Jurastudijobs.com were not deleted');
      }
    });
  });

  // Clear cookies and check if they are wiped
  const cookies = document.cookie.split(";");
  let allCookiesDeleted = true;

  cookies.forEach(cookie => {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    const value = eqPos > -1 ? cookie.substr(eqPos + 1) : "";

    console.log(`Attempting to delete cookie: ${name} with value: ${value}`);

    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;`;

    // Check if the cookie is deleted
    const isCookieDeleted = !document.cookie.split(";").some(item => item.trim().startsWith(name + "="));
    if (isCookieDeleted) {
      console.log(`Cookie ${name} deletion successful`);
    } else {
      allCookiesDeleted = false;
      console.log(`Cookie ${name} deletion failed`);
    }
  });

  if (allCookiesDeleted) {
    console.log('All cookies have been deleted');
  } else {
    console.log('Some cookies were not deleted');
  }
}
