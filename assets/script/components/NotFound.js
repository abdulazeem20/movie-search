export function NotFound({ target }) {
  let message = $(`
    <div class="notfound">
        <h4>Not Found !!!!</h4>
    </div>
  `);

  target.append(message);
}
