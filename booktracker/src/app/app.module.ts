import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksModule } from './books/books.module';
import { BookLibraryModule } from 'book-library';
import { SharedModule } from './shared/shared.module';
import { ReaderLibraryModule } from 'reader-library';
import { LibraryComponent } from './library/library.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { LoggerService } from './core/logger.service';
import { PlainLoggerService } from './core/plain-logger.service';
import { LogUrlInterceptor } from './core/log-url.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LibraryComponent,
    InventoryComponent,
    ActivityLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BooksModule,
    BookLibraryModule,
    SharedModule,
    ReaderLibraryModule
  ],
  providers: [
    { provide: LoggerService, useClass: PlainLoggerService },
    { provide: HTTP_INTERCEPTORS, useClass: LogUrlInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
