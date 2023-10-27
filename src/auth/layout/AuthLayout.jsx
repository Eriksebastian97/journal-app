import { Grid, Typography } from '@mui/material'


export const AuthLayout = ({children,title=""}) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      // los comp de materia casi todos vienen con xs o sx
      //sx :styles extends nos permite trabajar con la propiedas styles y tenemos acceso al theme que elegimos themeProvider
      //xs:hace referencia a un tamaño de , pantalla pequeñas y medianas
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
            width:{md:450},
            backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {/**va a contener a los hijos en ente caso el formulario */}
        {children}

        </Grid>
    </Grid>
  )
}
