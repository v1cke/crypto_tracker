import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoPricesComponent } from './crypto-prices/crypto-prices.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'tracker', component: CryptoPricesComponent },
  { path: 'portfolio', component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
