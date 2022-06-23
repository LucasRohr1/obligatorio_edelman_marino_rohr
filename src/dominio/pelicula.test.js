import Sistema, { NFTs, NFT, Usuario } from "./Usuario.mjs"

test('creación de un usuario', () => {
  let unUsuario = new Usuario("Martin", "Edelman", "martin1247", "095194400");
  expect(unUsuario.nombre).toBe("Martin");
  expect(unUsuario.apellido).toBe("Edelman");
  expect(unUsuario.username).toBe("martin1247");
  expect(unUsuario.password).toBe("095194400");
  expect(unUsuario.online).toBe(false);
});

test("Creación de un nft", () => {
  let unNFT = new NFT(562, "myNFT", "../interfaz/img/Arte/A1.avif");
  expect(unNFT.id).toBe(562)
  expect(unNFT.nombre).toBe("myNFT")
  expect(unNFT.precio).toBe()
  expect(unNFT.fav).toBe(false)
  expect(unNFT.img).toBe("../interfaz/img/Arte/A1.avif")
})