const initialAppState = {
  //GoldenSpiral.js and SilverSpiral.js
  orientation:
    window.screen.availHeight >= window.screen.availWidth
      ? "vertical"
      : "horizontal",
  landing: true,
  homeElements: [
    <div className="card">
      <p>
        Ut ex metus, iaculis quis volutpat a, fermentum et orci. Maecenas elit
        ipsum, egestas vel metus in, volutpat mattis sem. Vivamus facilisis
        tellus at tristique varius. Nullam sagittis eleifend sollicitudin.
        Curabitur placerat porttitor velit nec porta. Ut eros lectus,
        sollicitudin non hendrerit eget, maximus nec leo. Ut fringilla euismod
        faucibus. Vestibulum et lorem ex. Sed mollis cursus massa et lacinia.
        Maecenas tempor nunc nec mattis egestas.
      </p>
    </div>,
    <div className="card">
      <p>
        Nunc nec enim faucibus, consectetur sem faucibus, ultricies orci.
        Quisque interdum ante est, vitae tempor felis posuere vel. Nulla quis
        urna luctus, molestie est vel, pellentesque orci. Maecenas sit amet
        sapien sed turpis commodo sollicitudin. Aenean quis lobortis magna.
        Maecenas ut ligula nec massa lobortis auctor in pellentesque elit.
        Maecenas efficitur lacinia ex, a semper turpis pulvinar in. Ut odio
        orci, ultricies eget venenatis quis, mollis id elit. Ut mollis nisl
        magna, vel lacinia arcu accumsan eget.
      </p>
    </div>,
    <div className="card">
      <p>
        Donec nec nibh quam. Sed vel ante est. Aliquam rhoncus dui vel velit
        consectetur, at dignissim urna congue. Duis et ligula ac odio rhoncus
        maximus. Sed at lectus molestie, malesuada felis et, semper nisl.
        Vestibulum arcu elit, tempus quis orci vitae, hendrerit efficitur dui.
        Vivamus libero nulla, vulputate quis eros vitae, tempus bibendum eros.
        Sed vitae erat velit. Ut eu fringilla nulla, non interdum sem. Quisque
        non suscipit ipsum.
      </p>
    </div>,
    <div className="card">
      <p>
        Pellentesque vitae eros erat. Aenean vehicula condimentum nisl, ac
        luctus magna. Donec mattis tempus diam, ac ultricies nunc pellentesque
        a. Proin scelerisque diam lectus, pretium facilisis est sagittis in.
        Vivamus sit amet suscipit eros, vel rutrum lectus. In sodales lectus
        nunc, in faucibus enim molestie consectetur. Quisque sollicitudin
        tristique feugiat.
      </p>
    </div>,
  ],
  aboutElements: [],
};

export default initialAppState;
