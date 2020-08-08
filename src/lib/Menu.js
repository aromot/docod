export default {
  parse(menu) {
    const items = [];

    const _parse = (entries) => {
      for (let i = 0; i < entries.length; i++)
      {
        const entry = entries[i];
        
        if(entry.children)
          _parse(entry.children);
        else if(entry.path)
          items.push(entry);
      }
    }

    _parse(menu);

    return items;
  }
}