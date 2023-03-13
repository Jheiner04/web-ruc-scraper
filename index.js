const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');
const path = require('path');

const fechaActual = new Date();
const fechaString = fechaActual.toLocaleDateString().replace(/\//g, '');
const horaString = fechaActual.toLocaleTimeString().replace(/:/g, '');
const filtro = 'filtro';
const rutaArchivo = path.join(__dirname, 'csv', filtro + '_' + fechaString + '_' + horaString + '.csv');
const writeStream = fs.createWriteStream(rutaArchivo);

async function init(filtro) {
  try {
    const $ = await request({
      uri: 'https://www.universidadperu.com/empresas/busqueda/' + filtro,
      transform: body => cheerio.load(body)
    });
    writeStream.write('RUCS \n')
    $('.clr').find('ul').each((i, el) => {
      if (i > 0) {
        $(el).find('li a').toArray().forEach(async (li, j, array) => {
          try {
            const $$ = await request({
              uri: $(li).attr('href'),
              transform: body => cheerio.load(body)
            });
            const ruc = $$('.clr').find('ul li').html()
            var arrayRuc = []
            if (ruc.indexOf('rong> ') > -1) {
              arrayRuc = ruc.split('rong> ')
            }
            writeStream.write(arrayRuc[1] ? `${arrayRuc[1]} \n` : '0 \n')
            if (j === array.length - 1) {
              console.log('¡Extracción exitosa!');
            }
          } catch (error) {
            console.error('ERROR URL', error)
          }

        })
      }

    });

  } catch (error) {
    console.error('ERROR', error)
  }
}

init(filtro);
